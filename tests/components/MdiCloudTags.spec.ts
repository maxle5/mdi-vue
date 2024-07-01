
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudTags from "../../src/components/MdiCloudTags.vue";

test("MdiCloudTags snapshot", () => {
  const wrapper = mount(MdiCloudTags, {});
  expect(wrapper.html()).toMatchSnapshot();
});
