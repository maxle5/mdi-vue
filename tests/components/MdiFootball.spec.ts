
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFootball from "../../src/components/MdiFootball.vue";

test("MdiFootball snapshot", () => {
  const wrapper = mount(MdiFootball, {});
  expect(wrapper.html()).toMatchSnapshot();
});
