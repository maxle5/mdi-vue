
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimer10 from "../../src/components/MdiTimer10.vue";

test("MdiTimer10 snapshot", () => {
  const wrapper = mount(MdiTimer10, {});
  expect(wrapper.html()).toMatchSnapshot();
});
