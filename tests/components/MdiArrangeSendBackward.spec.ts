
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrangeSendBackward from "../../src/components/MdiArrangeSendBackward.vue";

test("MdiArrangeSendBackward snapshot", () => {
  const wrapper = mount(MdiArrangeSendBackward, {});
  expect(wrapper.html()).toMatchSnapshot();
});
