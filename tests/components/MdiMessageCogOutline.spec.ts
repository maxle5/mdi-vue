
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageCogOutline from "../../src/components/MdiMessageCogOutline.vue";

test("MdiMessageCogOutline snapshot", () => {
  const wrapper = mount(MdiMessageCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
