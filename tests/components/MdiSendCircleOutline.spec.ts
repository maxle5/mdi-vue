
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSendCircleOutline from "../../src/components/MdiSendCircleOutline.vue";

test("MdiSendCircleOutline snapshot", () => {
  const wrapper = mount(MdiSendCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
