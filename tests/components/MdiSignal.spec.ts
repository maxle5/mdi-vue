
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignal from "../../src/components/MdiSignal.vue";

test("MdiSignal snapshot", () => {
  const wrapper = mount(MdiSignal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
