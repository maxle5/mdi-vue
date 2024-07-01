
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSubwayVariant from "../../src/components/MdiSubwayVariant.vue";

test("MdiSubwayVariant snapshot", () => {
  const wrapper = mount(MdiSubwayVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
