
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSendOutline from "../../src/components/MdiSendOutline.vue";

test("MdiSendOutline snapshot", () => {
  const wrapper = mount(MdiSendOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
