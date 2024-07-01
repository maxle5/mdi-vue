
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHiking from "../../src/components/MdiHiking.vue";

test("MdiHiking snapshot", () => {
  const wrapper = mount(MdiHiking, {});
  expect(wrapper.html()).toMatchSnapshot();
});
