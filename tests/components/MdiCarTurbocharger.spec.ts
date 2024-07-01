
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarTurbocharger from "../../src/components/MdiCarTurbocharger.vue";

test("MdiCarTurbocharger snapshot", () => {
  const wrapper = mount(MdiCarTurbocharger, {});
  expect(wrapper.html()).toMatchSnapshot();
});
