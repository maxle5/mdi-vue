
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContainEnd from "../../src/components/MdiContainEnd.vue";

test("MdiContainEnd snapshot", () => {
  const wrapper = mount(MdiContainEnd, {});
  expect(wrapper.html()).toMatchSnapshot();
});
