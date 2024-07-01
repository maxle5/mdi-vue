
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileCloud from "../../src/components/MdiFileCloud.vue";

test("MdiFileCloud snapshot", () => {
  const wrapper = mount(MdiFileCloud, {});
  expect(wrapper.html()).toMatchSnapshot();
});
