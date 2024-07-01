
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSnowshoeing from "../../src/components/MdiSnowshoeing.vue";

test("MdiSnowshoeing snapshot", () => {
  const wrapper = mount(MdiSnowshoeing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
