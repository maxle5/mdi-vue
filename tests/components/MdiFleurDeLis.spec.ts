
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFleurDeLis from "../../src/components/MdiFleurDeLis.vue";

test("MdiFleurDeLis snapshot", () => {
  const wrapper = mount(MdiFleurDeLis, {});
  expect(wrapper.html()).toMatchSnapshot();
});
