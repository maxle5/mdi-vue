
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOar from "../../src/components/MdiOar.vue";

test("MdiOar snapshot", () => {
  const wrapper = mount(MdiOar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
