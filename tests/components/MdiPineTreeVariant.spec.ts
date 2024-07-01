
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPineTreeVariant from "../../src/components/MdiPineTreeVariant.vue";

test("MdiPineTreeVariant snapshot", () => {
  const wrapper = mount(MdiPineTreeVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
