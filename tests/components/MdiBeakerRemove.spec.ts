
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeakerRemove from "../../src/components/MdiBeakerRemove.vue";

test("MdiBeakerRemove snapshot", () => {
  const wrapper = mount(MdiBeakerRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
