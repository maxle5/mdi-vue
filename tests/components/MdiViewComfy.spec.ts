
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewComfy from "../../src/components/MdiViewComfy.vue";

test("MdiViewComfy snapshot", () => {
  const wrapper = mount(MdiViewComfy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
