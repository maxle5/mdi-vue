
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeCircleOutline from "../../src/components/MdiHomeCircleOutline.vue";

test("MdiHomeCircleOutline snapshot", () => {
  const wrapper = mount(MdiHomeCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
