
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAngularjs from "../../src/components/MdiAngularjs.vue";

test("MdiAngularjs snapshot", () => {
  const wrapper = mount(MdiAngularjs, {});
  expect(wrapper.html()).toMatchSnapshot();
});
