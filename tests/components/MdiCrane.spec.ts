
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCrane from "../../src/components/MdiCrane.vue";

test("MdiCrane snapshot", () => {
  const wrapper = mount(MdiCrane, {});
  expect(wrapper.html()).toMatchSnapshot();
});
