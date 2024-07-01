
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMap from "../../src/components/MdiMap.vue";

test("MdiMap snapshot", () => {
  const wrapper = mount(MdiMap, {});
  expect(wrapper.html()).toMatchSnapshot();
});
