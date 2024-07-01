
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPublish from "../../src/components/MdiPublish.vue";

test("MdiPublish snapshot", () => {
  const wrapper = mount(MdiPublish, {});
  expect(wrapper.html()).toMatchSnapshot();
});
