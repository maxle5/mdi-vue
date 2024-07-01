
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudSearch from "../../src/components/MdiCloudSearch.vue";

test("MdiCloudSearch snapshot", () => {
  const wrapper = mount(MdiCloudSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
