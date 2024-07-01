
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSendCircle from "../../src/components/MdiSendCircle.vue";

test("MdiSendCircle snapshot", () => {
  const wrapper = mount(MdiSendCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
