
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignDirectionRemove from "../../src/components/MdiSignDirectionRemove.vue";

test("MdiSignDirectionRemove snapshot", () => {
  const wrapper = mount(MdiSignDirectionRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
