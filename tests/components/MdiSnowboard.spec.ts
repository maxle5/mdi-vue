
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSnowboard from "../../src/components/MdiSnowboard.vue";

test("MdiSnowboard snapshot", () => {
  const wrapper = mount(MdiSnowboard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
