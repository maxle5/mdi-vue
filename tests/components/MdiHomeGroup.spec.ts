
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeGroup from "../../src/components/MdiHomeGroup.vue";

test("MdiHomeGroup snapshot", () => {
  const wrapper = mount(MdiHomeGroup, {});
  expect(wrapper.html()).toMatchSnapshot();
});
