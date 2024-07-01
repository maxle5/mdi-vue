
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDelta from "../../src/components/MdiDelta.vue";

test("MdiDelta snapshot", () => {
  const wrapper = mount(MdiDelta, {});
  expect(wrapper.html()).toMatchSnapshot();
});
