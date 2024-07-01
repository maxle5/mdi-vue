
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGateBuffer from "../../src/components/MdiGateBuffer.vue";

test("MdiGateBuffer snapshot", () => {
  const wrapper = mount(MdiGateBuffer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
