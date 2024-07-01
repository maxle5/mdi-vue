
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCctv from "../../src/components/MdiCctv.vue";

test("MdiCctv snapshot", () => {
  const wrapper = mount(MdiCctv, {});
  expect(wrapper.html()).toMatchSnapshot();
});
