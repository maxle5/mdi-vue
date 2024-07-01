
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloud from "../../src/components/MdiCloud.vue";

test("MdiCloud snapshot", () => {
  const wrapper = mount(MdiCloud, {});
  expect(wrapper.html()).toMatchSnapshot();
});
