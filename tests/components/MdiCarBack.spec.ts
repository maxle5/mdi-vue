
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarBack from "../../src/components/MdiCarBack.vue";

test("MdiCarBack snapshot", () => {
  const wrapper = mount(MdiCarBack, {});
  expect(wrapper.html()).toMatchSnapshot();
});
