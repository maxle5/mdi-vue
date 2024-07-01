
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiQueueFirstInLastOut from "../../src/components/MdiQueueFirstInLastOut.vue";

test("MdiQueueFirstInLastOut snapshot", () => {
  const wrapper = mount(MdiQueueFirstInLastOut, {});
  expect(wrapper.html()).toMatchSnapshot();
});
