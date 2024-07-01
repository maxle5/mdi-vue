
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSunSnowflake from "../../src/components/MdiSunSnowflake.vue";

test("MdiSunSnowflake snapshot", () => {
  const wrapper = mount(MdiSunSnowflake, {});
  expect(wrapper.html()).toMatchSnapshot();
});
