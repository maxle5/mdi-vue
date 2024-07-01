
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountCogOutline from "../../src/components/MdiAccountCogOutline.vue";

test("MdiAccountCogOutline snapshot", () => {
  const wrapper = mount(MdiAccountCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
