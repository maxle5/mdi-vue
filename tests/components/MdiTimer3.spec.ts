
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimer3 from "../../src/components/MdiTimer3.vue";

test("MdiTimer3 snapshot", () => {
  const wrapper = mount(MdiTimer3, {});
  expect(wrapper.html()).toMatchSnapshot();
});
