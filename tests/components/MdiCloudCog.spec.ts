
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudCog from "../../src/components/MdiCloudCog.vue";

test("MdiCloudCog snapshot", () => {
  const wrapper = mount(MdiCloudCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
