
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckCircle from "../../src/components/MdiCheckCircle.vue";

test("MdiCheckCircle snapshot", () => {
  const wrapper = mount(MdiCheckCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
