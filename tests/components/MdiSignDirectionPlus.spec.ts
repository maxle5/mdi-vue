
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignDirectionPlus from "../../src/components/MdiSignDirectionPlus.vue";

test("MdiSignDirectionPlus snapshot", () => {
  const wrapper = mount(MdiSignDirectionPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
