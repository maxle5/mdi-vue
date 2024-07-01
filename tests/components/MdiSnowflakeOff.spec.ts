
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSnowflakeOff from "../../src/components/MdiSnowflakeOff.vue";

test("MdiSnowflakeOff snapshot", () => {
  const wrapper = mount(MdiSnowflakeOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
