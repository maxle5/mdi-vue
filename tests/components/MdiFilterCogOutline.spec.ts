
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterCogOutline from "../../src/components/MdiFilterCogOutline.vue";

test("MdiFilterCogOutline snapshot", () => {
  const wrapper = mount(MdiFilterCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
