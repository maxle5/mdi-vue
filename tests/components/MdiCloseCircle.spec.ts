
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloseCircle from "../../src/components/MdiCloseCircle.vue";

test("MdiCloseCircle snapshot", () => {
  const wrapper = mount(MdiCloseCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
