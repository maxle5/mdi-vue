
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSunSnowflakeVariant from "../../src/components/MdiSunSnowflakeVariant.vue";

test("MdiSunSnowflakeVariant snapshot", () => {
  const wrapper = mount(MdiSunSnowflakeVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
