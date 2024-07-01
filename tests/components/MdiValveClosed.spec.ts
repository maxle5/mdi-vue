
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiValveClosed from "../../src/components/MdiValveClosed.vue";

test("MdiValveClosed snapshot", () => {
  const wrapper = mount(MdiValveClosed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
