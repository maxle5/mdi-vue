
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScreenRotation from "../../src/components/MdiScreenRotation.vue";

test("MdiScreenRotation snapshot", () => {
  const wrapper = mount(MdiScreenRotation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
