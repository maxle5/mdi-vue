
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSnowflakeMelt from "../../src/components/MdiSnowflakeMelt.vue";

test("MdiSnowflakeMelt snapshot", () => {
  const wrapper = mount(MdiSnowflakeMelt, {});
  expect(wrapper.html()).toMatchSnapshot();
});
