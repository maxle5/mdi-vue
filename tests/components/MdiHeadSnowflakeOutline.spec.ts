
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadSnowflakeOutline from "../../src/components/MdiHeadSnowflakeOutline.vue";

test("MdiHeadSnowflakeOutline snapshot", () => {
  const wrapper = mount(MdiHeadSnowflakeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
