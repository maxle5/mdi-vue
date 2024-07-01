
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckCircleOutline from "../../src/components/MdiCheckCircleOutline.vue";

test("MdiCheckCircleOutline snapshot", () => {
  const wrapper = mount(MdiCheckCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
