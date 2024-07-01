
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSnowman from "../../src/components/MdiSnowman.vue";

test("MdiSnowman snapshot", () => {
  const wrapper = mount(MdiSnowman, {});
  expect(wrapper.html()).toMatchSnapshot();
});
