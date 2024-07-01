
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLiquor from "../../src/components/MdiLiquor.vue";

test("MdiLiquor snapshot", () => {
  const wrapper = mount(MdiLiquor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
