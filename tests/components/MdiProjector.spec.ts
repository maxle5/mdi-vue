
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProjector from "../../src/components/MdiProjector.vue";

test("MdiProjector snapshot", () => {
  const wrapper = mount(MdiProjector, {});
  expect(wrapper.html()).toMatchSnapshot();
});
